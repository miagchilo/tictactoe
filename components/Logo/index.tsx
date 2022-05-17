import { motion } from 'framer-motion';
import classes from './index.module.scss';

const Logo = () => (
  <div className={classes.wrapper}>
    <motion.div
      animate={{
        scale: [1, 1.5, 1],
        opacity: [0, 0.5, 1],
      }}
    >
      <h1>
        <span className="color_yellow">T</span>
        <span className="color_red">I</span>
        <span className="color_yellow">C</span>
      </h1>
      <h1>
        <span className="color_red">T</span>
        <span className="color_yellow">A</span>
        <span className="color_red">C</span>
      </h1>
      <h1>
        <span className="color_yellow">T</span>
        <span className="color_red">O</span>
        <span className="color_yellow">E</span>
      </h1>
    </motion.div>
  </div>
)

export default Logo;
