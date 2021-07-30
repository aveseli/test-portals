import Portal from "@material-ui/core/Portal";

type PortalProps = {
    children: React.ReactNode;
    elementId: string;
};

const AppPortal = ({ children, elementId }: PortalProps) => {
    const modalRoot = document.getElementById(elementId)!;
    return <Portal container={modalRoot}>{children}</Portal>;
};

export default AppPortal;
