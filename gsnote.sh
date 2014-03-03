if [[ -f ./build/linux/nw ]]
then
	chmod +x ./build/linux/nw
	./build/linux/nw
else
	chmod +x ./build.sh
	./build.sh
fi