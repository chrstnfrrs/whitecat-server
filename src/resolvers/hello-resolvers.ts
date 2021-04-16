const helloResolver = (): string => {
  return process.env.SECRET || 'missing';
};

export { helloResolver };
