  using System;
  public static class Paper
  {
    public static int Paperwork(int n, int m)
    {
      if(n < 0 || m < 0) {
        return 0;
      } else {
        return n *= m;
        }
    }
  }
