class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> map = new HashMap<>();
        for(String s: strs) {
            char[] charAr = s.toCharArray();
            Arrays.sort(charAr);
            String sortStr = new String(charAr);
            map.putIfAbsent(sortStr, new ArrayList<>());
            map.get(sortStr).add(s);
            }
         return new ArrayList<>(map.values());

    }
}