@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <h1>{{ __('Create a dish') }}</h1>

            @if ($errors->any())
            <div class="alert alert-danger">
                <strong>Whoops!</strong> There were some problems with your input.<br><br>
                <ul>
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
            @endif

            <form action="{{ route('dishes.store') }}" method="post">
                @csrf
                <div class="form-group">
                    <input type="text" name="name" class="form-control" placeholder="name" autofocus />
                </div>

                <fieldset>
                    <legend>Tags</legend>
                    <div class="row">
                    @foreach($tags as $tag)
                        <div class="col-3">
                            <label for="tag_{{ $tag->id }}">
                                <input
                                    type="checkbox"
                                    name="tags[]"
                                    id="tag_{{ $tag->id }}"
                                    value="{{ $tag->id }}"
                                /> {{ $tag->name }}
                            </label>
                        </div>
                    @endforeach
                    </div>
                </fieldset>

                <div class="form-group mt-4">
                    <button type="submit" class="btn btn-primary">Create</button>
                </div>
            </from>
        </div>
    </div>
</div>
@endsection
