
### Formula From REDDIT
# 1 Gb/s gives us about 156,000 packets per second (0.0008MB each).
# 1/156,000 Gb/packet = 1.2 mW-s/packet = 1.2 mJ/packet.
# 1J=0.000277778Wh
# x/0.0008*1.2*0.001*0.000277778


### WHAT WE WANT TO DO
# MB=>kWh
# kWh =>C02 grams


def red_formula_energy(x):
    return x/0.0008*1.2*0.001*0.000277778*1000
def co2_emission(x):
    return x*0.442

video_size=["2160","1440","1080","720","360"]
video_data=[64.8,39.8,27.5,7.5,5.4]
stream_wh=[0.55,
0.47,
0.44,
0.4,
0.38,
]
download_wh=[
    0.18,
0.17,
0.16,
0.15,
0.14,

]
test=[28.2,
17.7,
12.6,
3.9,
2.7,
]
#for a in video_data:
    #print(f"{red_formula_energy(a)}")
#print("\n\n\n")
#for a in video_data:
    #print(f"{co2_emission(red_formula_energy(a))}")
for a in stream_wh:
    print(co2_emission(a))
print("\n\n\n")
for a in test:
    print(co2_emission(a))