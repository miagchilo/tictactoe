import classes from './index.module.scss';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Props {
  index: number;
  avatar: StaticImageData;
  name: string;
  symbol: string;
  active: boolean;
}

const ProfileCard = (props: Props) => {
  const { index, avatar, name, symbol, active } = props;

  return (
    <motion.div animate={{ opacity: [0, 1] }}>
      <div className={`${classes.wrapper} ${active && classes.active}`}>
        <Image src={avatar} alt="avatar" width={87} height={92} />
        <h6>{name}</h6>
        <div
          className={`
            ${classes.symbol}
            ${!index ? 'color_yellow' : 'color_red'}
          `}
        >
          {symbol}
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
