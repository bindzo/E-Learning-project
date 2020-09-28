import { createStyles } from "@material-ui/core";
import cover from './assets/img/cover.jpg'
const style = (theme) =>
  createStyles({
    root:{
        backgroundImage:  `url(${cover})`,
        height: 500,
        width: '100%',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center'
    }
  });

export default style;
