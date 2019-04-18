@component('mail::message')
# A message from your contact form

**Name:** {{ $contact->name }}

**Company Name:** {{ $contact->company_name }}

**Message:** {{ $contact->message }}

@endcomponent
