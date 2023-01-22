import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';

function Banner() {
  return (
    <Grid item xs={12}>
      <CardMedia
        component="img"
        image="https://img.freepik.com/foto-gratis/fondo-futbol-cesped-zapatos_23-2147832118.jpg?w=900&t=st=1674327027~exp=1674327627~hmac=f9c8f632840a665ef4852a94155d8e377b294ca06cea71d3023fc92c2b5f66ce"
        title="Banner"
        // className={classes.banner}
      />
    </Grid>
  );
}
export default Banner

