import styles from './index.module.css'

type Props = {
  href: string;
};

const MoreBtn = ({ href }: Props) => {
  return (
    <a href={href} className={styles.moreBtnLink}>
      詳しく見る
    </a>
  );
};

export default MoreBtn;