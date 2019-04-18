<?php

namespace App\Http\Controllers;

use App\Contact;
use App\Mail\ContactMail;
use Illuminate\Http\Request;
use Validator;
use Mail;

class ContactController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'company_name' => 'required',
            'email' => 'required',
            'message' => 'required'
        ]);

        // Store message in DB
        $contact = Contact::create($request->all());

        // Send email
        $mail = Mail::send(new ContactMail($contact));
    }
}
