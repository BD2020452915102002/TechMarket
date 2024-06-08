import React, { useEffect, useState } from 'react';
import { dashboardApi } from "../../../api/dashboardApi.js";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ComposedChart, ResponsiveContainer, Label } from 'recharts';

function Dashboard() {
    const [combinedData, setCombinedData] = useState([]);

    const fetch = async () => {
        try {
            const res1 = await dashboardApi.sumOrderTo5MonthRecent();
            const res2 = await dashboardApi.sumPuscharOrderTo5MonthRecent();

            const orders = res1.data.map(item => ({ month: item._id, orders: item.total }));
            const income = res2.data.map(item => ({ month: item._id, income: item.total }));

            const currentMonth = new Date().getMonth() + 1;
            const months = Array.from({ length: 5 }, (_, i) => {
                const month = currentMonth - 4 + i;
                return month > 0 ? month : month + 12;
            });

            const combined = months.map(month => {
                const orderItem = orders.find(item => item.month === month) || { orders: 0 };
                const incomeItem = income.find(item => item.month === month) || { income: 0 };
                return { month, orders: orderItem.orders, income: incomeItem.income };
            });

            setCombinedData(combined);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        fetch();
    }, []);

    const numberFormatter = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });

    return (
        <div>
            <p>Dashboard</p>
            <ResponsiveContainer width="50%" height={400} className={' bg-white rounded-xl shadow-lg py-10'}>
                <ComposedChart data={combinedData}>
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="month">
                        <Label value="Months" offset={-20} position="insideBottom" />
                    </XAxis>
                    <YAxis yAxisId="right">
                        <Label value="Đã bán (sản phẩm)" angle={-90} position="insideRight" style={{ textAnchor: 'middle' }} offset={120}/>
                    </YAxis>
                    <YAxis yAxisId="left" orientation="right">
                        <Label value="Doanh thu (VND)" angle={-90} position="insideLeft" style={{ textAnchor: 'middle' }} offset={50} />
                    </YAxis>
                    <Tooltip
                        formatter={(value, name) => {
                            if (name === 'Đã bán (sản phẩm)') {
                                return numberFormatter.format(value);
                            } else if (name === 'Doanh thu (VND)') {
                                return `${numberFormatter.format(value)} đ`;
                            }
                            return value;
                        }}
                    />
                    <Legend verticalAlign="bottom" align="center" wrapperStyle={{ paddingTop: '50px', fontSize: 12 }} />
                    <Bar yAxisId="left" dataKey="orders" fill="#62D1D2" barSize={40} name="Đã bán (sản phẩm)" className={'!rounded-t-4'} />
                    <Line yAxisId="right" type="monotone" dataKey="income" stroke="#ff7300" name="Doanh thu (VND)" />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Dashboard;
