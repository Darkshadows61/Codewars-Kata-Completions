using System;

public class Kata
{
  public static string AreYouPlayingBanjo(string name)
  {
      if (name[0] == 'R') {
      return $"{name} plays banjo";
    } else if (name[0] == 'r') {
      return $"{name} plays banjo";
    } else {
      return $"{name} does not play banjo";
    }
  }
}