class Kata
{
    public static bool Hero(int bullets, int dragons)
    {
        if (bullets == 0 && dragons == 0) {
          return true;
        } else if (bullets == 0) {
          return false;
        } else if (bullets/dragons >= 2) {
          return true;
        } else {
          return false;
        }
    }
}