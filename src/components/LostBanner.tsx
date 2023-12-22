import { Banner } from '@/components';

interface Props {
  answer: string;
}

const LostBanner = ({ answer }: Props) => {
  return (
    <Banner variant="lost">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  );
};

export default LostBanner;
