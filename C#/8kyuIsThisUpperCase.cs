public static class StringExtensions
{
  public static bool IsUpperCase(this string text)
  {
    if (text == text.ToUpper()) {
      return true;
    } else{
      return false;
    }
  }
}