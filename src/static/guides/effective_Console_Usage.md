Quick recap
-----------

This is not a beginner's guide to the console, but I will summarize a quick information recap in here.

* The console is a command-line interface that lets you type in commands, change and see variable values.
* To activate or deactivate the console, you press the tilde key (~).
* The bottommost line always contains the current user input buffer.
* Once you're done typing your message or command, you press enter for the system to execute it.
* The caret is the blinking cursor that is either an underscore (_) or a full rectangle block (¦).
* All commands start with a leading slash (/) or backslash (\\).

If you don't type the leading slash or backslash in front of your text and press enter:
1. If in-game, it will send a global chat message.
2. If not in-game, the game will add a leading backslash for you.  
In other words, it considers everything to be a command.

The 2 insertion modes are the following:
1. When the caret is a small underscore (_), a new character gets inserted (added) where the caret is.
2. When the caret is a full rectangle block (¦), a new character replaces the character where the caret is.

Variables accessible through the console are called *console variables* or *cvars* for short.

Auto-completion
---------------

Running auto-completion (by pressing tab) can be used to help speed up several processes:
* To list variables and commands starting with a certain string pattern after you've typed at least one character.  
Example: type in `r_` and then press tab to get a list of all renderer variables.
* To add the leading backslash.  
Example: to vote cpm3a, you can type in `cv map cpm3a`, press tab and then enter.  
The auto-completion recognizes that cv is a command and will add the leading backslash.
* To speed up typing.

Short command aliases
---------------------

Certain commands and vote strings have short aliases to reduce typing:

| Alias | Command |
|:------|:--------|
| cv    | callvote |
| wr    | weaponrespawn |
| falldamage | fallingdamage |
| limit | scorelimit |
| ot | overtime |
| gp | gameplay |
| thaw | thawtime |
| tl | timelimit |
| ref | referee |
| unref | unreferee |
| mute | mutespecs |

Detailed connection info
------------------------

Use the `cstats` command to check your ping range for both client-to-server and server-to-client.  
With no argument, it gives you information for yourself.  
The command can take a player ID if you want to see the stats of someone else.  

Search
------

There are 2 very useful commands for searching variables and commands, called `cvarlist` and `cmdlist`.  
The awesomest property they have is the * matching syntax.  
The * will try to match as many characters as possible that do not match the following pattern.

`cvarlist crosshair` will print out all variables that start with the word *crosshair*.  
`cvarlist *crosshair` will print out all variables that contain the word *crosshair*.

The cvarlist command displays a bunch of letters in front of the variables it found. They describe variable types.

Variable types
--------------

Variable types get printed out as a single character when using the `cvarlist` command.

|   | Category     | Description / Remarks  |
|:-:|:-------------|:-----------------------|
| S | server info  | sent in response to front-end requests |
| s | system info  | these cvars will be duplicated on all clients |
| U | user info    | sent to server on connect or change |
| R | ROM          | display only, cannot be set by user at all |
| I | init         | don't allow change from console at all, but can be set from the command line |
| A | archive      | used for system variables, not for player specific configurations |
| L | latched      | will only change when C code next does a Cvar_Get() call |
| C | cheat        | can not be changed when sv_cheats is 0 |
| ? | user created | unknown to the game and created by a set command |

Using `cv` to query values
--------------------------

The `callvote` command can be used to display help and query current CPMA/OSP server settings.  
`cv` will query the help and give you a list of all the things that can be voted.  

Suppose that after reading the help, you're interested in the *gameplay* category.  
`cv gameplay` will display the help of that category, showing you what can be voted.  
It will also tell you what the current gameplay mode is.

OSP help syntax
---------------

Most commands that require at least 1 argument will display some help if you invoke them with no argument.  
Example: `callvote`

However, some commands can be run without any argument, like `cstats`, so a different method is needed to display the help.  
OSP commands have a special argument for querying the help: `?`.  
Example: `cstats ?`

Commands with client numbers
----------------------------

Several commands require a client number as an argument, like `kick`, `remove`, `cstats`, etc.  
Most of those now support passing a player name (without color codes) and will tell you if there's any ambiguity preventing execution.

Pasting from the clipboard
--------------------------

You can ctrl+c text on the desktop and paste it with ctrl+v into the console.  
This is mostly used for entering IP addresses for the `connect` command.

The `toggle` command
--------------------

Toggles a cvar between a set of defined values.  

Syntax: toggle cvarname [value1 value2 value3...]  

So, what does it do with integers?
* when no argument is passed:  
> if the cvar is not 0, it becomes 0  
> if the cvar is 0, it becomes 1  
* when there are arguments:  
> if the current isn't on the list, it sets the cvar to the first one in the list  
> if the current value is in the list, it set the cvar to the next one (with wrap-around) in the list  

So, for a cvar with possible values 0, 1 and 2, having the bind `bind space "toggle cvarname 0 1 2"` means every time you press the space bar, the cvar will toggle to the next possible value.

Finding the last error
----------------------

After an error occurred, the error message can be found in the cvar `com_lastError`.  
This cvar will not be defined before at least 1 error happened.

Quotes and command chaining
---------------------------

Command arguments are separated by spaces (` `), commands by semi-colons (`;`).  
The problem is that sometimes, you need one of those characters inside an argument.  
The solution to this is enclosing the entire argument in double quotes (`"`).  

Command chaining is mostly useful for binding multiple actions to a single key/button.

Example: `bind space "drop;weapnext"` to drop the current weapon and select the next one (otherwise you get the pummel).  
Note that `bind space drop;weapnext` would execute `bind space drop` and then `weapnext`.

The `reset` command
-------------------

Resets a cvar to its default value.

Syntax: reset cvarname

The current and default values can be queried with `/cvarname`.

The `set` command family
------------------------

Sets a cvar to a value. If the cvar doesn't exist, it gets created.

Syntax: set cvarname value

| Command | Flag | Explanation |
|:--------|:-----|:------------|
| set  | none |  |
| seta | archive | save to the config |
| setu | user info | sent to server on connect or change |
| sets | server info | sent in response to front end requests |

The `vstr` command
------------------

Executes the content of a variable as a command.

Syntax: vstr cvarname

Example #1: with `set rage quit`, `vstr rage` will execute `quit`

Example #2: connection scripts  
In a read-only config: `set roboty connect roboty.cpmpickup.eu:27961;password lobstarz`  
In-game: `vstr roboty` to connect to the server

Example #3: alternating smiley  
`set smiley1 "say ^5:);set smiley vstr smiley2"`  
`set smiley2 "say ^6:);set smiley vstr smiley1"`  
`set smiley vstr smiley1`  
`bind space vstr smiley`

Key mapping
-----------

| Key | Action |
|:----|:-------|
| up arrow | next command |
| down arrow | previous command |
| home | move caret at the first character |
| end | move caret after the last character |
| delete | delete the character above the caret |
| backspace | delete the character to the left of the caret |
| page up | scroll up 2 lines |
| page down | scroll down 2 lines |
| wheel up | scroll up 2 lines |
| wheel down | scroll down 2 lines |
| insert | toggles between the 2 insertion modes |
| enter | finish the line |
| tab | run auto-completion |
| control + wheel up | scroll up 6 lines |
| control + wheel down | scroll down 6 lines |
| control + home | scroll up to the first line |
| control + end | scroll down to the last line |
| control + L | clear the screen (same as typing /clear) |
| control + P | previous command |
| control + N | next command |
| control + V | paste from the clipboard |
| shift + wheel up | previous command |
| shift + wheel down | next command |