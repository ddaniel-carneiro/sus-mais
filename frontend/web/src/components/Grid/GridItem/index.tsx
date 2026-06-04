interface GridItemProps {
  children?: React.ReactNode,
  additionalClasses?: string
}

/**
 * Create the item that goes inside the columns of the **GridBodyRow** component.
 *
 * All properties of this component except **children** are activated by classes from the **TailwindCSS** framework.
 *
 * @param children Preferably, it would be interesting to place only text, buttons or icons to fill this property.
 * @example
 * <GridItem> Name </GridItem>
 *
 * @returns TSX.Element
 */
const GridItem: React.FC<GridItemProps> = ({ children, additionalClasses }) => (
  <div className={`text-[#485558] flex justify-center items-center font-bold ${additionalClasses}`}>
    {children}
  </div>
)

export default GridItem
