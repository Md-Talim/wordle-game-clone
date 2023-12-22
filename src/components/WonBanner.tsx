import { Banner } from '@/components';

interface Props {
  numOfGuesses: number;
}

const WonBanner = ({ numOfGuesses }: Props) => {
  return (
    <Banner variant="won">
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>
          {numOfGuesses === 1 ? '1 guess' : `${numOfGuesses} guesses`}
        </strong>
        .
      </p>
    </Banner>
  );
};

export default WonBanner;
