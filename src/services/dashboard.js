export const getCompanies = function (data = []) {
  const company_name = data.map((i) => i.company_name);
  return [...new Set(company_name)].length;
};
export const getProductions = function (data = []) {
  const product_name = data.map((i) => i.product_name);
  return [...new Set(product_name)].length;
};
