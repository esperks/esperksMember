import React, { useState } from "react";
import { IconButton, Tooltip, Box } from "@mui/material";
import { Icon } from "@iconify/react";

interface CopyToClipboardProps {
  text: string;
  iconSize?: number;
  tooltipTitle?: string;
}

const CopyToClipboardToolkit: React.FC<CopyToClipboardProps> = ({
  text,
  iconSize = 15,
  tooltipTitle = "Copy",
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setIsActive(true); // Set active state
      setTimeout(() => setIsActive(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <Tooltip title={tooltipTitle} placement="top">
      <Box position="relative" display="inline-block">
        {/* Copy Icon */}
        <IconButton
          onClick={handleCopy}
          sx={{
            padding: 0,
            marginLeft: "4px",
            verticalAlign: "middle",
          }}
        >
          <Icon icon="eva:copy-fill" width={iconSize} />
        </IconButton>

        {/* Active Checkmark Icon */}
        {isActive && (
          <Box
            position="absolute"
            top={-4} // Adjust position for the checkmark
            right={-8}
            bgcolor="white"
            borderRadius="50%"
            p="4px"
          >
            <Icon icon="akar-icons:check" width={15} color="green" />
          </Box>
        )}
      </Box>
    </Tooltip>
  );
};

export default CopyToClipboardToolkit;
