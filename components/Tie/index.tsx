import Image from 'next/image';
import classes from './index.module.scss';
import refreshIcon from '../../public/refresh.svg';
import { motion } from 'framer-motion';

interface Props {
  avatars: StaticImageData[];
  handleRefreshGame(): void;
}

const Tie = (props: Props) => {
  const { avatars, handleRefreshGame } = props;

  return (
    <motion.div animate={{ opacity: [0, 1] }}>
      <div className={classes.wrapper}>
        <div className={classes.avatars}>
          <Image src={avatars[0]} alt="avatar" width={149} height={157} />
          <Image src={avatars[1]} alt="avatar" width={149} height={157} />
        </div>
        <h4>It&apos;s a tie!</h4>
        <button onClick={handleRefreshGame}>
          <Image src={refreshIcon} alt="refresh" width={48} height={48} />
        </button>
      </div>
    </motion.div>
  );
};

export default Tie;
