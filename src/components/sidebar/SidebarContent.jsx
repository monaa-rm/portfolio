import { Box, Divider } from "@mui/material";
import { SidebarHeader, SidebarFooter, SidebarTabs } from "./";

const SidebarContent = () => {
    return (
        <Box
            sx={{
                justifyContent: "center",
                textAlign: "center",
            
            }}
        >
            <SidebarHeader />

            <Divider variant="middle" sx={{ mt: 1 }} />

            <SidebarTabs />

            <Divider variant="middle" sx={{ mt: 1 }} />

            <SidebarFooter />
        </Box>
    );
};

export default SidebarContent;
