const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function getFinancialAdvice(data) {
  const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });

  const prompt = `
You are a professional financial advisor.

User Financial Data:

Income: ${data.income}
Expenses: ${data.expenses}
Savings: ${data.savings}
Goal: ${data.goal}

Give advice in this EXACT markdown format:

### 1. Saving Strategy
Explain how much the user should save monthly.

### 2. Budget Plan
Break down recommended spending.

### 3. Investment Suggestions
Suggest safe investments.

### 4. Financial Improvement Tips
Give 3–5 actionable tips.
`;

  const result = await model.generateContent(prompt);

  const response = await result.response;

  return response.text();
}

module.exports = getFinancialAdvice;
