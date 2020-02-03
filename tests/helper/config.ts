/**
 *
 * @param ms
 */
export const delay = (ms: number): unknown => new Promise((resolve) => setTimeout(resolve, ms));

export default { delay };
