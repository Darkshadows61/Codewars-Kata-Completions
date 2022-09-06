public class MathCheck {
    public static int AreaOrPerimeter(int l, int w) {
        if (l == w) {
          return l*w;
        } else {
          return 2*(l+w);
        }
    }
}