import { styled, Link } from '@mui/material';

const FooterLink = styled(Link)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  color: theme.palette.common.white,
  textDecoration: 'none',
  height: '100%',
  padding: theme.spacing(0, 2),
  transition: theme.transitions.create('color'),

  ':hover': {
    color: theme.palette.primary.main,
  },
}));

export default FooterLink;
