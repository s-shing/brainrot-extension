#include <stdio.h>
#include <stdbool.h>

// Constants
# define no !
# define cap false
# define DEAD 
# define aura *
# define glaze &


// Basic operations
# define lore(type, var, val) type var = val
# define yap(x) printf(x)
# define yap_int(var) printf("%d\n", var)
# define six_seven(var, inc) var += inc
# define sigma(var, val) var == val
# define alpha(var, val) var > val
# define beta(var, val) var < val
# define crash_out(x) return x
# define tweak return

// Functions and Environments
# define fuckItWeBall(body) int main(int argc, char** argv) { body }
# define sus(cond, body, otherwise) if( cond ) { body } else { otherwise }
# define serving(init, cond, inc, body) for( init ; cond ; inc ) { body }
# define stan(cond, body) serving(DEAD; cond; DEAD) { body }
# define rizz(type, name, args, body) type name args { body }


// # define SOB
// # define BROKEN
// # define WILT


