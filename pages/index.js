import React from "react";
import {
  earningData,
  SparklineAreaData,
  ecomPieChartData,
  dropdownData,
  recentTransactions,
  weeklyStats,
  medicalproBranding,
} from "../data/dummy";
import Header from "../components/ecommerce/header/Header";
import Revenue from "../components/ecommerce/revenue/Revenue";
import Transactions from "../components/ecommerce/transactions/Transactions";
import Head from "next/head";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <Header earningData={earningData} />

      <Revenue chartData={SparklineAreaData} pieChartData={ecomPieChartData} />

      <Transactions
        dropDownData={dropdownData}
        recentTransaction={recentTransactions}
        weeklyStats={weeklyStats}
        sparkLineAreaData={SparklineAreaData}
        medicalproBranding={medicalproBranding}
      />
    </div>
  );
};

export default Home;
