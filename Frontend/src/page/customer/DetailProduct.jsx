import {OnceProduct} from "../../store/Provider.jsx";
import Navbar from "../../component/Navbar.jsx";
import Footer from "../../component/Footer.jsx";
import DetailProductContent from "../../component/DetailProductContent.jsx";
import Comment from "../../component/Comment.jsx";
import {Box, Tab, Tabs, Typography} from "@mui/material";
import {useState} from "react";
import PropTypes from "prop-types";
import SuggestProduct from "../../component/SuggestProduct.jsx";

function CustomTabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function DetailProduct() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <OnceProduct>
            <div className={'bg-gray-50 '}>

                <div className={'mx-20'}>
                    <Navbar/>
                    <DetailProductContent/>
                    <Box sx={{width: '100%'}}>
                        <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="Thông tin chi tiết" {...a11yProps(0)} />
                                <Tab label="Bình luận" {...a11yProps(1)} />
                            </Tabs>
                        </Box>
                        <CustomTabPanel value={value} index={0}>
                            Thông tin chi tiết sẽ được cập nhật sau
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                            <Comment/>
                        </CustomTabPanel>

                    </Box>
                    <SuggestProduct/>
                    <Footer/>
                </div>
            </div>
        </OnceProduct>

    );
}

export default DetailProduct;