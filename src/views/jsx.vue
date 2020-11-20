<script>
export default {
  data: () => ({
    message: "Hello, JSX!",
  }),

  render() {
    return <h1>message: {this.message}</h1>;
  },
};
</script>
