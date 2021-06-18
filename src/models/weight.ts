import * as Types from '../index.d';

const mapToCollection = (
  weights: Types.Weight.Weight[],
): Types.Weight.Weight[] =>
  weights.map((weight) => ({
    date: new Date(weight.date),
    id: weight.id,
    userId: weight.userId,
    weight: weight.weight,
  }));

export { mapToCollection };
