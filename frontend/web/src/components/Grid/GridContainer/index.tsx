interface GridContainerProps {
  children: React.ReactNode,
  additionalClasses?: string,
}

/**
 * Create a container for grids.
 *
 * All properties of this component except **children** are activated by classes from the **TailwindCSS** framework.
 *
 * @param children The children of this component are very specific, it can only receive the **GridHeaderRow** and **GridBodyRow** components in this property.
 * @example
 * <GridContainer>
 *  <GridHeaderRow> ... </GridHeaderRow>
 *  <GridBodyRow> ... </GridBodyRow>
 * </GridContainer>
 *
 * @returns TSX.Element
 */
const GridContainer: React.FC<GridContainerProps> = ({ children, additionalClasses }) => (
  <div className={`w-full flex flex-col gap-1 overflow-y-auto ${additionalClasses}`}>
    {children}
  </div>
)

export default GridContainer
