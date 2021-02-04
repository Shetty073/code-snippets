# django filesize validation
from django.core.exceptions import ValidationError

def file_size(file): # add this to some file where you can import it from
    limit = 2 * 1024 * 1024 # 2 MiB
    if file.size > limit:
        raise ValidationError('File too large. Size should not exceed 2 MiB.')

image = forms.FileField(required=False, validators=[file_size])
