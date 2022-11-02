// React 18 no longer presumes children are defined:
// https://www.arahansen.com/how-children-types-work-in-react-18-and-typescript-4/
// This type prevents us from having to type out the whole thing when required.
type FCC<P = {}> = React.FC<PropsWithChildren<P>>
