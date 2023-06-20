import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Typography,
} from "@material-tailwind/react";

export default function Example() {
  return (
    <Menu>
      <MenuHandler>
        <Button variant="gradient" size="lg" color="deep-purple">
          Connect Wallet
        </Button>
      </MenuHandler>

      <MenuList>
        <MenuItem className="flex items-center gap-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1200px-MetaMask_Fox.svg.png"
            alt="metamast"
            className="h-6 w-6"
          />
          <Typography color="blue-gray" variant="h6">
            MetaMask
          </Typography>
        </MenuItem>
        <MenuItem className="flex items-center gap-3">
          <img
            src="https://help.coinbase.com/public-assets/favicons/apple-icon-180x180.png"
            alt="metamast"
            className="h-6 w-6 rounded-md"
          />
          <Typography color="blue-gray" variant="h6">
            Coinbase Wallet
          </Typography>
        </MenuItem>
        <MenuItem className="flex items-center gap-3">
          <img
            src="https://altcoinsbox.com/wp-content/uploads/2023/04/wallet-connect-logo.png"
            alt="metamast"
            className="h-6 w-6 rounded-md"
          />
          <Typography color="blue-gray" variant="h6">
            Connect Wallet
          </Typography>
        </MenuItem>
        <MenuItem className="flex items-center gap-3">
          <img
            src="https://trustwallet.com/assets/images/media/assets/trust_platform.svg"
            alt="metamast"
            className="h-7 w-7 rounded-md border "
          />
          <Typography color="blue-gray" variant="h6">
            Trust Wallet
          </Typography>
        </MenuItem>
        <MenuItem className="flex items-center gap-3">
          <img
            src="https://assets-cdn.trustwallet.com/blockchains/binance/info/logo.png "
            alt="metamast"
            className="h-7 w-7 rounded-md border "
          />
          <Typography color="blue-gray" variant="h6">
            Binance Wallet
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
