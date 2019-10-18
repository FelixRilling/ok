/**
 * Checks if an input is a radio or a checkbox.
 *
 * @private
 * @param {HTMLInputElement} element HTMLInputElement to check.
 * @returns {boolean} if the element is checkbox-like.
 */
const isInputElementCheckboxLike = (element) => element.type === "checkbox" || element.type === "radio";
export { isInputElementCheckboxLike };
//# sourceMappingURL=isInputElementCheckboxLike.js.map