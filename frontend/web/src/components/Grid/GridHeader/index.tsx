interface GridHeaderProps {
  children: React.ReactNode,
  gridCols: string,
  additionalClasses?: string
}

/**
 * Create the columns in the grid head, although the component has row in its name, it organizes its children into columns.
 *
 * All properties of this component except **children** are activated by classes from the **TailwindCSS** framework.
 *
 * @param children The children of this component are very specific, it can only receive the **GridHeaderItem** components in this property.
 * @example
 * <GridHeader>
 *  <GridHeaderItem> ... </GridHeaderItem>
 *  <GridHeaderItem> ... </GridHeaderItem>
 *  <GridHeaderItem> ... </GridHeaderItem>
 * </GridHeader>
 *
 * @param gridCols Defines the number of columns that the grid header will have. And the number of columns must be the same number of **GridHeaderItem** components that it has as children.
 * @example
 * <GridHeader gridCols="grid-cols-[1fr_1fr_1fr]">
 *  ...
 * </GridHeader>
 *
 * @returns TSX.Element
 */
const GridHeader: React.FC<GridHeaderProps> = ({ children, gridCols, additionalClasses }) => (
  <div className={`h-10 bg-[#F3F6F9] flex flex-shrink-0 justify-center items-center grid ${gridCols} rounded-lg ${additionalClasses}`}>
    {children}
  </div>
)

export default GridHeader
