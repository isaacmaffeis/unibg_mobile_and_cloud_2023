prev = 1
print(prev)
current = 1
print(current)
#%%
while current < 20:
	next_val = current + prev
	prev = current
	current = next_val
	print(next_val)