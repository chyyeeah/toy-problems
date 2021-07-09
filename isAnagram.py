# O(n^2) brute force
# def isAnagram(str1, str2):
  # if len(str1) != len(str2):
  #   return False
#   for char1 in str1:
#     for idx2, char2 in enumerate(str2):
#       if char1 == char2:
#         str2 = str2[0:idx2] + str2[idx2 + 1:]
#         break

#       if idx2 == len(str2) - 1:
#         return False

#   if len(str2) > 0:
#     return False

#   return True

# O(n) hash map
def isAnagram(str1, str2):
  if len(str1) != len(str2):
    return False

  hash = dict()
  for char in str2:
    if char not in hash:
      hash[char] = 0
    hash[char] = hash[char] + 1

  matches = 0

  for char in str1:
    if char not in hash:
      return False

    hash[char] = hash[char] - 1
    if hash[char] < 0:
      return False

    if hash[char] == 0:
      matches += 1

  if matches == len(hash):
    return True

  return False


print(isAnagram('god', 'dog'))
print(isAnagram('cat', 'act'))
print(isAnagram('wild', 'while'))