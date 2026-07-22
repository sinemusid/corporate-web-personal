import { MOCK_PORTFOLIO_ITEMS } from '../constants/portfolio-mock';
import { mapPortfolioItems } from './data-mapper';

export async function fetchPortfolio() {
  return mapPortfolioItems(MOCK_PORTFOLIO_ITEMS);
}
