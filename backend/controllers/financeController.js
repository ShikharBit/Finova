const Finance = require("../models/Finance");
const getFinancialAdvice = require("../services/geminiService");

exports.createFinance = async (req, res) => {
  try {
    const { income, expenses, savings, goal } = req.body;

    const advice = await getFinancialAdvice({
      income,
      expenses,
      savings,
      goal,
    });

    const finance = new Finance({
      income,
      expenses,
      savings,
      goal,
      advice,
    });

    await finance.save();

    res.json(finance);
  } catch (error) {
    console.error("Finance Error:", error);

    res.status(500).json({
      error: error.message,
    });
  }
};
