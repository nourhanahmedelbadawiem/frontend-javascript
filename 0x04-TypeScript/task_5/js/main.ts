// MajorCredits interface
interface MajorCredits {
  credits: number;
  brand: 'major';
}

// MinorCredits interface
interface MinorCredits {
  credits: number;
  brand: 'minor';
}

// sumMajorCredits function
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'major'
  };
}

// sumMinorCredits function
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'minor'
  };
}
