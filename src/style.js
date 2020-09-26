const styles = () => ({
  container: {
    backgroundColor: "red",
    color: "white",
  },
  title: {
    color: "white",
    fontSize: 5 * 10,
    "& span": {
      color: "green",
    },
    "& .subtitle": {
      color: "blue",
    },
  },
  p: {
    color: "grey",
  },
});

export default styles;
