import { Button, Menu, MenuItem, SvgIcon, Typography } from "@material-ui/core";
import { Facebook, LinkedIn, Twitter } from "@material-ui/icons";
import ShareIcon from "@material-ui/icons/ShareRounded";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import styled from "styled-components";

export interface ShareMenuProperties {
  quote: string;
  customCTA?: JSX.Element;
}

const SocialButtonWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)}px;
`;

const SocialButton = ({
  icon,
  label,
}: {
  icon: JSX.Element;
  label: string;
}) => (
  <SocialButtonWrapper>
    <SvgIcon fontSize="small">{icon}</SvgIcon>
    <Typography variant="inherit">{label}</Typography>
  </SocialButtonWrapper>
);

const ShareMenu: React.FC<ShareMenuProperties> = ({ quote, customCTA }) => {
  const { t } = useTranslation("welevelUIComponents");
  // State
  const [anchorEl, setAnchorEl] = useState<undefined | HTMLElement>(undefined);

  return (
    <>
      <div
        onClick={(event) => setAnchorEl(event.currentTarget)}
        onKeyDown={(event) => setAnchorEl(event.currentTarget)}
        tabIndex={0}
        role="button"
      >
        {customCTA || (
          <Button startIcon={<ShareIcon />} size="small" variant="outlined">
            {t("ShareMenu.CTA")}
          </Button>
        )}
      </div>

      <Menu
        keepMounted
        id="share-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(undefined)}
      >
        <MenuItem>
          <FacebookShareButton
            quote={quote}
            hashtag="#welevelacademy"
            url={window.location.href}
          >
            <SocialButton icon={<Facebook />} label="Facebook" />
          </FacebookShareButton>
        </MenuItem>
        <MenuItem>
          <TwitterShareButton
            title={quote}
            hashtags={["welevelacademy"]}
            url={window.location.href}
          >
            <SocialButton icon={<Twitter />} label="Twitter" />
          </TwitterShareButton>
        </MenuItem>
        <MenuItem>
          <LinkedinShareButton url={window.location.href}>
            <SocialButton icon={<LinkedIn />} label="LinkedIn" />
          </LinkedinShareButton>
        </MenuItem>
      </Menu>
    </>
  );
};

export default ShareMenu;
