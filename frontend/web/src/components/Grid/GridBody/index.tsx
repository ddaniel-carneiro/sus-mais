interface GridBodyProps {
  children: React.ReactNode,
  gridCols: string,
  additionalClasses?: string
}

/**
 * Create the columns in the body of the grid. Although the component has "row" in its name, it organizes its children into columns.
 *
 * All properties of this component except **children** are activated by classes from the **TailwindCSS** framework.
 *
 * @param children The children of this component are very specific, it can only receive **GridBodyImage** or **GridBodyItem** components in this property.
 * @example
 * <GridBody>
 *  <GridBodyImage src={img} />
 *  <GridBodyItem> ... </GridBodyItem>
 *  <GridBodyItem> ... </GridBodyItem>
 * </GridBody>
 *
 * @param gridCols Defines the number of columns the grid body will have. And the number of columns must be the same as the number of **GridBodyImage** and **GridBodyItem** components it has as children.
 * @example
 * <GridBody gridCols="grid-cols-[1fr_1fr_1fr]">
 *  ...
 * </GridBody>
 *
 * @returns TSX.Element
 */
const GridBody: React.FC<GridBodyProps> = ({ children, gridCols, additionalClasses }) => (
  <div className={`grid ${gridCols} border-2 border-[#F3F6F9] rounded-lg ${additionalClasses}`}>
    {children}
  </div>
)

export default GridBody
