// Deleting old photo and uploading new one (profile pic update)
if ($request->hasFile('photo')) {
	// Delete old photo file
	$file_path = public_path('storage/photo/' . $user->photo);
	@unlink($file_path);
	// Save the photo file
	$fileName = $request->file('photo')->getClientOriginalName();
	$fileExtension = $request->file('photo')->getClientOriginalExtension();
	$fileNameToStore = $fileName . '_' . $user->id . '_' . time() . '.' . $fileExtension;
	$path = $request->file('photo')->storeAs('public/photo', $fileNameToStore);
	$user->photo = $fileNameToStore;
	$user->save();
}