public class CodeWars {
  public static long OverTheRoad(long address, long n) {
    //first take the length of street n and multply by 2 to find the total number of houses
    //left side starts at 1 and increases by 2 until it's 1 less than total number of houses
    //right side starts at total number of houses and decreases by 2 until it reaches 2
    long totalHouses = n*2;
    long addToOne = (address - 1)/2;
    long resultOdd = totalHouses - (addToOne*2);
    long resultEven = (totalHouses -address)+1;
    if (address%2 != 0) {
      return resultOdd;
    } else {
      return resultEven;
    }
  }
}