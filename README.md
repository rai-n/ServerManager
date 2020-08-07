# checks all text channels once a day, checks to see if the last message was {duration} ago, if so, it saves information into some form of format, basically {textChannelName, originalCategory}. And moves the text channel into the archived category.
## Some way to have it check the text channel description to see if it should move the channels, eg ignore all noContexts, perhaps check for string in description? 

# Checks for any new messages in any of the archived channels, and if posted in, places it back into the appropiate category, from looking at the data format, where the original category was saved
## Perhaps in the format, there might be like a position in the category? so it isn't placed at the bottom, although for a channel being moved from archived, maybe the bottom is the appropiate place?

# Some way to set the duration that the last message must have been posted in, to be moved to archived
