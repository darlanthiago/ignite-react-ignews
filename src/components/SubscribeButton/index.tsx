import styles from "./styles.module.scss";

interface SubscribeButtonInterface {
  priceId: string;
}

export const SubscribeButton = ({ priceId }: SubscribeButtonInterface) => {
  return (
    <button type="button" className={styles.subscribeButton}>
      Subscribe now
    </button>
  );
};
