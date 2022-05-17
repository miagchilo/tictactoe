import Image from 'next/image';
import classes from './index.module.scss';
import refreshIcon from '../../public/refresh.svg';
import { motion } from 'framer-motion';

interface Props {
  avatar: StaticImageData;
  name: string;
  handleRefreshGame(): void;
}

const Winner = (props: Props) => {
  const { avatar, name, handleRefreshGame } = props;

  return (
    <motion.div animate={{ opacity: [0, 1] }}>
      <div className={classes.wrapper}>
        <Image src={avatar} alt="avatar" width={149} height={157} />
        <h4>{name} WINS!</h4>
        <button onClick={handleRefreshGame}>
          <Image src={refreshIcon} alt="refresh" width={48} height={48} />
        </button>
      </div>
    </motion.div>
  );
};

export default Winner;
