const userService = require("../services/UserService");
const productService = require("../services/ProductService");
const cloudinary = require("../utils/cloudinary");

exports.createUser = async (req, res) => {
  var avatarPublicId;

  try {
    if (!req.body || !req.body.email) {
      throw new Error("Email is required.");
    }

    if (req.body.avatar) {
      const uploadedResponse = await cloudinary.uploader.upload(
        req.body.avatar,
        {
          upload_preset: "TechMarket-User",
        }
      );
      if (!uploadedResponse) {
        throw new Error("error: can't upload image to cloudinary");
      }
      req.body.avatar = uploadedResponse;
      avatarPublicId = uploadedResponse.public_id;
    }

    const user = await userService.createUser(req.body);
    res.status(200).json({ data: user, status: "success" });
  } catch (err) {
    try {
      if (avatarPublicId) {
        const destroyResponse = await cloudinary.uploader.destroy(
          avatarPublicId
        );
        if (!destroyResponse.result === "ok") {
          throw new Error("Failed to delete image from Cloudinary");
        }
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
    res.status(500).json({ error: err.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);
    res.json({ data: user, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json({ data: users, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    if (req.body.avatar) {
      user = await userService.getUserById(req.params.id);

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      if (user.avatar && user.avatar.public_id) {
        await cloudinary.uploader.destroy(user.avatar.public_id);
      }

      const uploadedResponse = await cloudinary.uploader.upload(
        req.body.avatar,
        {
          upload_preset: "TechMarket-User",
        }
      );

      if (!uploadedResponse) {
        throw new Error("Failed to upload image to cloudinary");
      }

      const updatedUser = await userService.updateUser(
        req.params.id,
        {
          $set: {
            ...req.body,
            avatar: uploadedResponse,
          },
        },
        { new: true }
      );

      res.status(200).json({ data: updatedUser, status: "success" });
    } else {
      const updatedUser = await userService.updateUser(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json({ data: updatedUser, status: "success" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (user.avatar && user.avatar.public_id) {
      const destroyResponse = await cloudinary.uploader.destroy(
        user.avatar.public_id
      );
      if (!destroyResponse.result === "ok") {
        throw new Error("Failed to delete image from Cloudinary");
      }
    }
    const deletedUser = await userService.deleteUser(req.params.id);
    res.status(200).json({ data: deletedUser, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCartByUser = async (req, res) => {
  try {
    const userWithCartItems = await User.findById(req.params.id).populate({
      path: "cart",
      model: "CartItem",
      populate: {
        path: "productId",
        model: "Product",
      },
    });

    if (!userWithCartItems) {
      return res.status(404).send("User not found");
    }

    res.json(userWithCartItems.cart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
